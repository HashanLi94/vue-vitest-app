interface User {
	id: number;
	username: string;
	name: string;
	projects: string[];
	coolness?: number;
	favoriteFood: string;
}

async function fetchUser(username: string): Promise<User | undefined> {
	const users: User[] = [
		{
			id: 1,
			username: "evanYou",
			name: "Evan You",
			projects: ["vue.js", "nuxt", "vite"],
            favoriteFood: "Sushi"
		},
		{
			id: 2,
			username: "anthonyFu07",
			name: "Anthony Fu",
			projects: ["vitest", "vite"],
            favoriteFood: "Sushi"
		},
		{
			id: 3,
			username: "hashandu94",
			name: "Hashan Liyanage",
			projects: ["CCF", "SLA", "PP3"],
            favoriteFood: "Biriyani"
		},
	];

	return users.find((user) => user.username === username);
}

export async function getUserByUsername(username: string) {
	const user = await fetchUser(username);

	if (user) {
		user.coolness = username === "evenYou" ? 100 : -1;
	} else {
		throw new Error("User not found");
	}

	return user;
}
