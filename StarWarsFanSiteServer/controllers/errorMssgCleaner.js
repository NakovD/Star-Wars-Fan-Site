

const errorMessageClean = (errorMessage) => {
    const messages = {
        "Validation failed: name: Path `name` is required.": 'Name is required!',
        "Validation failed: species: Path `species` is required.": 'Species is required!',
        "Validation failed: era: Path `era` is required.": 'Era is required!',
        "Validation failed: imgURL: Path `imgURL` is required.": 'Image link is required!',
        "Validation failed: description: Path `description` is required.": 'Description is required!',
        "Validation failed: description: Description must be at least 20 characters long!": 'Description must be at least 20 characters long!',
        "Validation failed: imgURL: Image link is invalid!": 'Image link is invalid!',
        "Post validation failed: title: Title must be at least 5 characters!": 'Title must be at least 5 characters!',
        "Post validation failed: title: Path `title` is required.": 'Title is required!',
        "Post validation failed: description: Path `description` is required.": 'Description is required!',
        "Post validation failed: description: Description must be at least 20 characters!": 'Description must be at least 20 characters!'
    
    }

    return messages[errorMessage];
}



module.exports = errorMessageClean;