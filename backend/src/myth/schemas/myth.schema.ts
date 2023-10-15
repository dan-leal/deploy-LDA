import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MythDocument = Myth & Document;

@Schema({ collection: 'lendas' })
export class Myth {
  @Prop()
  id_autor: string;

  @Prop()
  titulo: string;

  @Prop()
  texto: string;
}

export const MythSchema = SchemaFactory.createForClass(Myth);
