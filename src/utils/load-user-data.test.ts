import { describe, test, expect } from "vitest";
import { getUserByUsername } from "./load-user-data";

describe("getUserByUsername", () => {
	test("fetch user", async () => {
		const user = await getUserByUsername("hashandu94");

		// expect(user).toEqual({
		// 	coolness: -1,
		// 	id: 3,
		// 	name: "Hashan Liyanage",
		// 	projects: ["CCF", "SLA", "PP3"],
		// 	username: "hashandu94",
		// });

		expect(user).toMatchSnapshot();
	});
});

describe("checkCoolness", () => {
	test("fetch user and check coolness", async () => {
		const userOne = await getUserByUsername("hashandu94");

		expect(userOne.coolness).toEqual(-1);
	});
});

describe("check the invalid user", () => {
	// test.fails("fetch user and check the user is valid or not", async () => {
	// 	const invalidUser = await getUserByUsername("hashandu948");
	// });

	test("fetch user and check the user is valid or not", async () => {
		expect(
			async () => await getUserByUsername("hashandu948")
		).rejects.toThrowError("User not found");
	});
});
