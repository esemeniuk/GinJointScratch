import { Acquisition } from './Acquisition';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { take, map } from 'rxjs/operators';
import { Observable  } from 'rxjs';
import firebase from 'firebase/app';
import { SpiritService } from './spirit.service';
import { Spirit } from './spirit';
import 'firebase/auth';

@Injectable({
    providedIn: 'root'
})
export class AcquisitionService {
    AcquisitionCollection: AngularFirestoreCollection <Acquisition>;

    constructor(private afs: AngularFirestore, private spiritService: SpiritService) {
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
        return this.AcquisitionCollection.valueChanges({ idField: 'id' }).pipe(
            map(acquisitions => {
                for (let a of acquisitions) {
                    this.spiritService.getSpiritById(a.spiritID).subscribe((res: Spirit) => { a.spirit = res; });
                }
                return acquisitions;
            })
        )
    }

    getAcquisitionById(id): Observable<Acquisition>{
        return this.AcquisitionCollection.doc<Acquisition>(id).valueChanges().pipe(take(1));
    }

    deleteAcquisitionById(id) {
        return this.afs.doc<Acquisition>(`acquisitions/${id}`).delete();
    }
}

