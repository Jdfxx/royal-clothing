import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyBW7UCCFWyCDZKnoEImo53YVI3z0a2ZSKc",
    authDomain: "royal-clothing.firebaseapp.com",
    databaseURL: "https://royal-clothing.firebaseio.com",
    projectId: "royal-clothing",
    storageBucket: "",
    messagingSenderId: "33411458075",
    appId: "1:33411458075:web:99d9f23963124ce5"
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const {displayName, email} = userAuth;

        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log("Error creating user", error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({prompt: "select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=> {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(object=> {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, object);
    });
    return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections)=> {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    return transformedCollection.reduce((acc, collection)=>{
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    },{});
};

export const getCurrentUser = ()=> {
    return new Promise((resolve, reject)=>{
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
};

export default firebase;
