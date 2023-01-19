/*
Copyright 2018 - 2022 The Alephium Authors
This file is part of the alephium project.

The library is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

The library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with the library. If not, see <http://www.gnu.org/licenses/>.
*/

import { Encoder, Decoder, Codec, createCodec } from './codec'
import { toInterBytes } from './interUint8Array'

const byteEnc: Encoder<number> = (n) => Uint8Array.of(n)

const byteDec: Decoder<number> = toInterBytes((bytes) => {
  const value = Number(bytes[0])
  bytes.pos += 1
  return value
})

export const Byte: Codec<number> = createCodec(byteEnc, byteDec)

Byte.enc = byteEnc
Byte.dec = byteDec