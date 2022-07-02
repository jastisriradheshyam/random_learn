/// <reference types="@types/google.maps" />

import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
// new google.maps.Map(document.getElementById('map') as HTMLElement, {
//   zoom: 1,
//   center: {
//     lat: 0,
//     lng: 0
//   }
// });