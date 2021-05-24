import { Spirit } from './spirit';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
    providedIn: 'root'
})
export class SpiritService {
    spiritCollection: AngularFirestoreCollection <Spirit>;

    constructor(private afs: AngularFirestore) {
        this.spiritCollection = this.afs.collection<Spirit>('spirits');
    }

    addSpirit(item: Spirit) {
        item.createdAt = firebase.firestore.FieldValue.serverTimestamp();
        return this.spiritCollection.add(item);
    }

    updateSpiritById(id, item: Spirit) {
        return this.spiritCollection.doc(id).set(item);
    }

    getSpirits(): Observable<Spirit[]> {
        return this.spiritCollection.valueChanges({idField: 'id'});
    }

    getSpiritById(id): Observable<Spirit>{
        return this.spiritCollection.doc<Spirit>(id).valueChanges().pipe(take(1));
    }

    deleteSpiritById(id) {
        return this.afs.doc<Spirit>(`spirits/${id}`).delete();
    }
}

