
const discussionValidator = (discussion) => {
    if (discussion.title.length < 5) {
        return {
            error: true,
            message: 'Title must be at least 5 characters long!'
        }
    }else if (discussion.description.length < 20) {
        return {
            error: true,
            message: 'Description must be at least 20 characters long!'
        }
    }
    return {
        error: false
    }
}

export default discussionValidator;