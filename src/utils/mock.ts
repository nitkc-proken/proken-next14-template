export const isUsingMock: boolean = process.env.NEXT_PUBLIC_USE_MOCK === "true";

export function mock<T>(repo: T, mock: T): T {
	return isUsingMock ? mock : repo;
}
