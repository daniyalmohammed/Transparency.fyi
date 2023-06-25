import { Console } from "console";
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from 'fs';
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';


const filePath = 'secureTransfer.txt';


let verified: boolean = false;
let uniqueid: string = "";

export type Reply = {
	code: string
  }

export default function handler(req: NextApiRequest, res: NextApiResponse<Reply>) {
	const reqBody = {
		nullifier_hash: req.body.nullifier_hash,
		merkle_root: req.body.merkle_root,
		proof: req.body.proof,
		credential_type: req.body.credential_type,
		action: req.body.action,
		signal: req.body.signal,
	};

	fetch(`https://developer.worldcoin.org/api/v1/verify/${process.env.NEXT_PUBLIC_WLD_APP_ID}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(reqBody),
	}).then(async (verifyRes) => {
		const wldResponse = await verifyRes.json()
		if (verifyRes.status == 200) {

			res.status(200).send({ code: wldResponse.code });
			verified = true;
			uniqueid =  req.body.nullifier_hash;
			// from here we open frontend and send uniqueID to textfile
			fs.writeFileSync(filePath, uniqueid);
			// CALL ON SUCCESS AND SWITCH THE VIEW
		} else {
			res.status(400).send({ code: wldResponse.code });
			console.log("VERIFICATION FAILED");
			verified = false;
		}
	});
};