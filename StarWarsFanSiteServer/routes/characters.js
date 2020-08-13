const express = require('express');
const router = express.Router();
const save = require('../controllers/charDBOperations.js');
const models = require('../models/character/character.js');
const { adminAuthorization } = require('../controllers/adminAuth.js');
const { authorization } = require('../controllers/auth.js');

router.post('/createChar', authorization, async (req, res) => {
    const saveCharInDb = await save(req);
    if (!saveCharInDb.error) {
        res.status(201).json({ message: 'Character saved successfully in DB!' });
    } else {
        res.status(400).json({ message: saveCharInDb.message });
    }
});

router.post('/approveChar', adminAuthorization, async (req, res) => {
    const saveCharInDb = await save(req);
    if (!saveCharInDb.error) {
        res.status(201).json({ message: 'Character saved successfilly in DB!' });
    } else {
        res.status(400).json({ message: saveCharInDb.message });
    }
});

router.get('/characters', async (req, res) => {
    const page = +req.query.page || 1;
    const keyWord = req.query.keyWord || '';
    try {
        const filtered = await models.approved.countDocuments({ name: { $regex: keyWord, $options: 'i' } });
        const part = await models.approved.find({ name: { $regex: keyWord, $options: 'i' } }).skip((page - 1) * 6).limit(6).lean();
        if (filtered === 0 && part.length === 0) {
            const count = await models.approved.countDocuments({ factions: { $regex: keyWord, $options: 'i' } });
            const searchInFactions = await models.approved.find({ factions: { $regex: keyWord, $options: 'i' } }).skip((page - 1) * 6).limit(6).lean();
            res.status(200).json({ characters: searchInFactions, maxPages: Math.ceil((count / 6)) });
            return;
        }
        res.status(200).json({ characters: part, maxPages: Math.ceil((filtered / 6)) });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/characters/adminOnly', adminAuthorization, async (req, res) => {
    try {
        const characters = await models.notApproved.find().lean();
        res.status(200).json(characters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/character/:id', async (req, res) => {          //GET specific character by id
    const characterId = req.params.id;
    try {
        const charInfo = await models.approved.findById(characterId).lean();
        res.status(200).json(charInfo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/character/adminOnly/:id', adminAuthorization, async (req, res) => {
    const charId = req.params.id;
    try {
        const charInfo = await models.notApproved.findById(charId).lean();
        res.status(200).json(charInfo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/disapproveChar', adminAuthorization, async (req, res) => {
    const idOfCharToDelete = req.body.id;
    try {
        const deleteChar = await models.notApproved.findByIdAndDelete(idOfCharToDelete);
        res.status(204).json({ message: 'Char deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});





module.exports = router;