import { fbConfig } from "./firebaseConfig.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
    getFirestore,
    AggregateField,
    AggregateQuerySnapshot,
    CollectionReference,
    DocumentReference,
    DocumentSnapshot,
    FieldPath,
    FieldValue,
    Firestore,
    FirestoreError,
    GeoPoint,
    LoadBundleTask,
    PersistentCacheIndexManager,
    Query, QueryCompositeFilterConstraint, QueryConstraint, QueryDocumentSnapshot,
    QueryEndAtConstraint, QueryFieldFilterConstraint,QueryLimitConstraint,
    QueryOrderByConstraint,QuerySnapshot,QueryStartAtConstraint,
    SnapshotMetadata,Timestamp,Transaction,WriteBatch    
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js"
    
//import { } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js"

import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const fbApp = initializeApp(fbConfig);
const fbAuth = getAuth(fbApp);
//const fbStorage = getStorage(fbApp);
const fbFirestore = getFirestore(fbApp);

export {fbApp, fbAuth, fbFirestore}