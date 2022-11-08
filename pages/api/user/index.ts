import { userService } from "../../../src/services/user.service";

export default async function handler(req, res) {
  const users = await (
    await userService.list({})
  ).toArray();
  res.status(200).json(users);
}
