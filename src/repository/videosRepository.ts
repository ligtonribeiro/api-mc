import mongoose from "mongoose";
import { Videos } from "../models/videos"

const VideosSchema = new mongoose.Schema<Videos>({
  titulo: { type: String },
  texto: { type: String },
  imagem: { type: String },
  duracao: { type: String },
  link: { type: String },
  dataPublicacao: { type: Date },
  url: { type: String },
  tags: { type: String },
  ativo: { type: Boolean },
})

export const VideosRepository = mongoose.model<Videos>("videos", VideosSchema);
