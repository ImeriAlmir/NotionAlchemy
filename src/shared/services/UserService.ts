import { addDoc, collection, CollectionReference, DocumentData } from "firebase/firestore";
import { db } from "../../config/Firebase";
import { User } from "../models/User";

export class UserService {
    private userCollectionRef: CollectionReference<DocumentData> = collection(db, "users");

    private static instance: UserService;

    public static getInstance(): UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }

        return UserService.instance;
    }

    public createUser = async (user: User): Promise<void> => {
        await addDoc(this.userCollectionRef, user);
    };
}
