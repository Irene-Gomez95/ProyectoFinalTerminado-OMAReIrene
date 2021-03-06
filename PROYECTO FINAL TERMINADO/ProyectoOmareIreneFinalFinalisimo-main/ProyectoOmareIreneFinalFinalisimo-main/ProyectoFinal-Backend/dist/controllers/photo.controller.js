"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePhoto = exports.deletePhoto = exports.createPhoto = exports.getPhoto = exports.getPhotos = void 0;
const photo_1 = __importDefault(require("../models/photo"));
const photo_2 = __importDefault(require("../models/photo"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
async function getPhotos(req, res) {
    const photos = await photo_1.default.find();
    return res.json(photos);
}
exports.getPhotos = getPhotos;
;
async function getPhoto(req, res) {
    const { id } = req.params;
    const photo = await photo_2.default.findById(id);
    return res.json(photo);
}
exports.getPhoto = getPhoto;
;
async function createPhoto(req, res) {
    const { title, description } = req.body;
    console.log(req.file?.path);
    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file?.path
    };
    const photo = new photo_2.default(newPhoto);
    await photo.save();
    return res.json({
        message: 'Photo sucessfully saved',
        photo
    });
}
exports.createPhoto = createPhoto;
;
async function deletePhoto(req, res) {
    const { id } = req.params;
    const photo = await photo_2.default.findByIdAndRemove(id);
    if (photo) {
        await fs_extra_1.default.unlink(path_1.default.resolve(photo.imagePath));
    }
    return res.json({
        message: 'Photo Deleted',
        photo
    });
}
exports.deletePhoto = deletePhoto;
;
async function updatePhoto(req, res) {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedPhoto = await photo_1.default.findByIdAndUpdate(id, {
        title,
        description
    }, { new: true });
    return res.json({
        message: 'Successfully Updated',
        updatedPhoto
    });
}
exports.updatePhoto = updatePhoto;
