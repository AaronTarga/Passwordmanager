import { Component, OnInit, OnDestroy } from '@angular/core';
import { Password } from '../api.service';
import { PasswordsService } from '../passwords.service';
import { BookmarksService } from '../bookmarks.service';

@Component({
  selector: 'app-page-bookmarks',
  templateUrl: './page-bookmarks.component.html',
  styleUrls: ['./page-bookmarks.component.scss']
})
export class PageBookmarksComponent implements OnInit, OnDestroy {
  private _pwords = null;
  private search = null;

  setPwords(_pwords: Password[]){
    this._pwords = _pwords.filter(pw => this.bookmarks.is(pw._id));
  }

  get pwords(){
    return PasswordsService.search(this._pwords, this.search);
  }

  private pword_subscription = null;
  private bookmark_subscription = null;

  constructor(private passwords: PasswordsService, private bookmarks: BookmarksService) {
  }

  ngOnInit() {
    this.passwords.unlock().then(() => {
      this.setPwords(this.passwords.snapshot);

      this.pword_subscription = this.passwords.get().subscribe((data: Password[]) => {
        this.setPwords(data);
      })

      this.bookmark_subscription = this.bookmarks.changes.subscribe(() => {
        this.setPwords(this.passwords.snapshot);
      });
    });
  }

  ngOnDestroy() {
    this.pword_subscription.unsubscribe();
    this.bookmark_subscription.unsubscribe();
  }

  searched(search: string){
    this.search = search;
  }
}
