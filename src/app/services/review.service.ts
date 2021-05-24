import { Acquisition } from './Acquisition';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
    providedIn: 'root'
})
export class AcquisitionService {
    AcquisitionCollection: AngularFirestoreCollection <Acquisition>;

    constructor(private afs: AngularFirestore) {
        this.AcquisitionCollection = this.afs.collection<Acquisition>('acquisitions');
    }

    addAcquisition(item: Acquisition) {
        item.createdAt = firebase.firestore.FieldValue.serverTimestamp();
        item.userID = firebase.auth().currentUser.uid;
        return this.AcquisitionCollection.add(item);
    }

    updateAcquisitionById(id, item: Acquisition) {
        return this.AcquisitionCollection.doc(id).set(item);
    }

    getAcquisitions(): Observable<Acquisition[]> {
        return this.AcquisitionCollection.valueChanges({idField: 'id'});
    }

    getAcquisitionById(id): Observable<Acquisition>{
        return this.AcquisitionCollection.doc<Acquisition>(id).valueChanges().pipe(take(1));
    }

    deleteAcquisitionById(id) {
        return this.afs.doc<Acquisition>(`acquisitions/${id}`).delete();
    }
}

