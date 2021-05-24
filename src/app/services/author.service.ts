import { Author } from './author';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthorService {
    authorCollection: AngularFirestoreCollection <Author>;

    constructor(private afs: AngularFirestore) {
        this.authorCollection = this.afs.collection<Author>('authors');
    }

    addAuthor(item: Author) {
        item.createdAt = firebase.firestore.FieldValue.serverTimestamp();
        return this.authorCollection.add(item);
    }

    updateAuthorById(id, item: Author) {
        return this.authorCollection.doc(id).set(item);
    }

    getAuthors(): Observable<Author[]> {
        return this.authorCollection.valueChanges({idField: 'id'});
    }

    getAuthorById(id): Observable<Author>{
        return this.authorCollection.doc<Author>(id).valueChanges().pipe(take(1));
    }

    deleteAuthorById(id) {
        return this.afs.doc<Author>(`authors/${id}`).delete();
    }
}

