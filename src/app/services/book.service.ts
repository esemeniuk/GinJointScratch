import { Book } from './book';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    bookCollection: AngularFirestoreCollection <Book>;

    constructor(private afs: AngularFirestore) {
        this.bookCollection = this.afs.collection<Book>('books');
    }

    addBook(item: Book) {
        item.createdAt = firebase.firestore.FieldValue.serverTimestamp();
        return this.bookCollection.add(item);
    }

    updateBookById(id, item: Book) {
        return this.bookCollection.doc(id).set(item);
    }

    getBooks(): Observable<Book[]> {
        return this.bookCollection.valueChanges({idField: 'id'});
    }

    getBookById(id): Observable<Book>{
        return this.bookCollection.doc<Book>(id).valueChanges().pipe(take(1));
    }

    deleteBookById(id) {
        return this.afs.doc<Book>(`books/${id}`).delete();
    }
}

