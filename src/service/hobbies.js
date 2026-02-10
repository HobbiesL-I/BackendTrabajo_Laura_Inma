const db = require('../configuration/database.js').db;
const { homedir, platform } = require('os');

const findAllBoardgames = (async () => {
    return await db('boardgame').leftJoin('boardgameInfo', 'boardgame.idBoardgame', 'boardgameInfo.idBoardgame')
    .leftJoin('category', 'boardgameInfo.idCategory', 'category.idCategory')
    .leftJoin('language', 'boardgameInfo.idLanguage', 'language.idLanguage')
    .leftJoin('boardgameImage', 'boardgameInfo.idImage', 'boardgameImage.idImage')
    .select('boardgame.*',
        db.raw('group_concat(distinct category.nameCategory) as categories'),
        db.raw('group_concat(distinct language.nameLanguage) as languages'),
        db.raw('group_concat(distinct boardgameImage.boardgameImage) as images')
    )
    .groupBy('boardgame.idBoardgame')
    .orderBy('boardgame.idBoardgame');
});

const findBoardgame = (async (id) => {
    return await db('boardgame').leftJoin('boardgameInfo', 'boardgame.idBoardgame', 'boardgameInfo.idBoardgame')
    .leftJoin('category', 'boardgameInfo.idCategory', 'category.idCategory')
    .leftJoin('language', 'boardgameInfo.idLanguage', 'language.idLanguage')
    .leftJoin('boardgameImage', 'boardgameInfo.idImage', 'boardgameImage.idImage')
    .select('boardgame.*',
        db.raw('Group_concat(distinct category.nameCategory) as categories'),
        db.raw('Group_concat(distinct language.nameLanguage) as languages'),
        db.raw('Group_concat(distinct boardgameImage.boardgameImage) as images')
    )
    .where('boardgame.idBoardgame', id)
    .groupBy('boardgame.idBoardgame')
    .first();
});

const findBoardgameByName = (async (name) => {
    return await db('boardgame').select('*').where({name: name}).first();
});

const addBoardgame = async (boardgameData, boardgameCategories, boardgameLanguages, boardgameImages) =>{
    const [idBoardgame] = await db('boardgame').insert({
        name: boardgameData.name,
        numberPlayers: boardgameData.numberPlayers,
        onePlayer: boardgameData.onePlayer || 0,
        price: boardgameData.price,
        playTime: boardgameData.playTime,
        mecanic: boardgameData.mecanic,
        age: boardgameData.age,
        difficulty: boardgameData.difficulty,
        description: boardgameData.description,
        qualification: boardgameData.qualification || 0,
        review: boardgameData.review || '',
        yearRelease: boardgameData.yearRelease
    });
    
    for(const categoryName of boardgameCategories.categories){
        const [idCategory] = await db('category').select('idCategory')
        .where('nameCategory', categoryName).pluck('idCategory');

        if(idCategory){
            await db('boardgameInfo').insert({
                idBoardgame: idBoardgame,
                idCategory: idCategory,
                idLanguage: null,
                idImage: null
            });
        }    
    }

    for(const languageName of boardgameLanguages.languages){
        const [idLanguage] = await db('language').select('idLanguage')
        .where('nameLanguage', languageName).pluck('idLanguage');

        if(idLanguage){
            await db('boardgameInfo').insert({
                idBoardgame: idBoardgame,
                idCategory: null,
                idLanguage: idLanguage,
                idImage: null
            });
        }
    }

    for (const imageUrl of boardgameImages.images){
        const [idImage] = await db('boardgameImage').select('idImage')
        .where('boardgameImage', imageUrl).pluck('idImage');

        if((idImage)){
            await db('boardgameInfo').insert({
                idBoardgame: idBoardgame,
                idCategory:idCategory,
                idLanguage:idLanguage,
                idImage: idImage
            });
        }
    }

    return idBoardgame;
};

const modifyBoardgame = (async (name, numberPlayers, onePlayer, price, playTime, mecanic, age, difficulty, image, description, qualification, review, yearRelease) => {
    return await db('boardgame').where({ idBoardgame: id }).update({
        name: name,
        numberPlayers: numberPlayers,
        onePlayer: onePlayer,
        price: price,
        playTime: playTime,
        mecanic: mecanic,
        age: age,
        difficulty: difficulty,
        image: image,
        description: description,
        qualification: qualification,
        review: review,
        yearRelease: yearRelease
    });
});

const removeBoardgame = (async (id) => {
    return await db('boardgame').where({ idBoardgame: id }).del();
});

const boardgameExistsById = (async (id) => {
    const boardgame = await db('boardgame').select('*').where({idBoardgame: id}).first();    
    return boardgame != null;
});

const boardgameExistsByName = (async (name) => {
    const boardgame = await db('boardgame').select('*').where({name: name}).first();
    return boardgame != null;
});

module.exports = {
    findAllBoardgames,
    findBoardgame,
    findBoardgameByName,
    addBoardgame,
    modifyBoardgame,
    removeBoardgame,
    boardgameExistsById,
    boardgameExistsByName
}