import { database } from "@/appwrite";

const getTodosGroupedByColumn = async () => {
  const data = await database.listDocuments(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
    process.env.NEXT_PUBLIC_APPWRITE_TODO_COLLECTION_ID!
  );
  const todos = data.documents;
};

export default getTodosGroupedByColumn;
