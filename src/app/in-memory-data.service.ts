import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      // { id: 11, name: 'Mr. Nice' },
      // { id: 12, name: 'Narco' },
      // { id: 13, name: 'Bombasto' },
      // { id: 14, name: 'Celeritas' },
      // { id: 15, name: 'Magneta' },
      // { id: 16, name: 'RubberMan' },
      // { id: 17, name: 'Dynama' },
      // { id: 18, name: 'Dr IQ' },
      // { id: 19, name: 'Magma' },
      // { id: 20, name: 'Tornado' },
      { id: 1, name: 'Billy Elgeron'},
      { id: 2, name: 'Storm Spirit'},
      { id: 3, name: 'Monkey King'},
      { id: 4, name: 'Earth Spirit'},
      { id: 5, name: 'Rick & Morty'},
      { id: 6, name: 'Ember Spirit'},
      { id: 7, name: 'Forsaken Archer'}
    ];
    return {heroes};
  }
}
