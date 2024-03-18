export type CreateUserParams = {
	clerkId: string;
	email: string;
	userName: string;
	firstName: string;
	lastName: string;
	photo: string;
};

export type UpdateUserParams = {
	firstName: string;
	lastName: string;
	userName: string;
	photo: string;
};
