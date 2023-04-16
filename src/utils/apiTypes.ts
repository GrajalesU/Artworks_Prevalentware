export interface RootObject {
  artObjects:          ArtObject[];
  count:               number;
  countFacets:         CountFacets;
  elapsedMilliseconds: number;
  facets:              RootObjectFacet[];
 }
 
 export interface ArtObject {
  hasImage:              boolean;
  headerImage:           Image;
  id:                    string;
  links:                 Links;
  longTitle:             string;
  objectNumber:          string;
  permitDownload:        boolean;
  principalOrFirstMaker: string;
  productionPlaces:      string[];
  showImage:             boolean;
  title:                 string;
  webImage:              Image;
 }
 
 export interface Image {
  guid:              string;
  height:            number;
  offsetPercentageX: number;
  offsetPercentageY: number;
  url:               string;
  width:             number;
 }
 
 export interface Links {
  self: string;
  web:  string;
 }
 
 export interface CountFacets {
  hasimage:  number;
  ondisplay: number;
 }
 
 export interface RootObjectFacet {
  facets:     FacetFacet[];
  name:       string;
  otherTerms: number;
  prettyName: number;
 }
 
 export interface FacetFacet {
  key:   string;
  value: number;
 }
 