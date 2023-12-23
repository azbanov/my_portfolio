import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import * as path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).end();
  }

  res.setHeader('Content-Disposition', 'attachment; filename=Azamat_Kurbanov.pdf');
  res.setHeader('Content-Type', 'application/pdf');

  const filePath = path.join(process.cwd(), 'public', 'Azamat_Kurbanov.pdf');

  if (fs.existsSync(filePath)) {
    const fileStream = fs.createReadStream(filePath);
    
    fileStream.pipe(res);
    
    res.on('finish', () => {
      fileStream.close();
    });
  } else {
    res.status(404).end();
  }
}