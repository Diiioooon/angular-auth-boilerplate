import { AccountService } from '@app/_services';
import { Observable, catchError, of } from 'rxjs';

export function appInitializer(accountService: AccountService): () => Observable<any> {
  return () => accountService.refreshToken()
    .pipe(
      catchError(() => of(null))
    );
}