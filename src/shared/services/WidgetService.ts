import { CollectionReference, DocumentData, DocumentReference, Firestore, addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../config/Firebase";
import { Widget } from "../models/Widget";

export class WidgetService {
    private widgetCollectionRef: CollectionReference<DocumentData> = collection(db, "widgets");

    private static instance: WidgetService;

    public static getInstance(): WidgetService {
        if (!WidgetService.instance) {
            WidgetService.instance = new WidgetService();
        }

        return WidgetService.instance;
    }

    public createWidget = async (widget: Widget): Promise<string> => {
        const docRef: DocumentReference = await addDoc(this.widgetCollectionRef, widget);
        return docRef.id;
    };

    public loadWidget = async (paramId: string): Promise<Widget> => {
        const id = paramId ?? "";
        const widgetRef: DocumentReference = doc(db, "widgets", id);
        return (await getDoc(widgetRef)).data() as Widget;
    };
}
