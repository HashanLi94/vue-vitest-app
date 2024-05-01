import { describe, test, expect } from "vitest";
import { getUserByUsername } from "./load-user-data";

describe("getUserByUsername", () => {
	test("fetch user", async () => {
		const user = await getUserByUsername("hashandu94");

		expect(user).toEqual({
			coolness: -1,
			id: 3,
			name: "Hashan Liyanage",
			projects: ["CCF", "SLA", "PP3"],
			username: "hashandu94",
		});
	});
});
