import {Injectable} from '@angular/core';


@Injectable()
export class DataService {
   public data;
   public shop_details;
   constructor() {
     this.shop_details = {
       code: -1,
       data: {
         shop_description: 'So nice. Tuned it up. E flat at nut was PERFECT E flat at 12th fret.',
         type_name: 'Music Store',
         shop_id: '4',
         shop_location: ' #136, 1st Floor, Brigade Gardens, Church Street, Off Brigade Road, 19, Church St, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001',
         shop_name: 'Bajaao',
         shop_type_id: '3',
         shopkeeper_contact: '7412589633',
         shopkeeper_email: '6rahulsk23@hotmail.com',
         shopkeeper_name: 'Rahul Singh kushwaha',
         shopkeeper_username: 'Rahul',
         error: false,
         message: null,
         password: false,
         username: false,
       }
     };
     this.data = [
       {
         'name': 'Musical Instrument',
         'children': [
           {
             'name': 'Electric',
             'children': [
               {
                 'name': 'guitar',
                 'products': [
                   {
                     'category_type_id_parent': '1',
                     'category_type_id_child': '3',
                     'category_type_name': 'guitar',
                     'product_id': '6',
                     'product_name': 'Vault ST1M Strat Style Electric Guitar with Die-cast tuners and Dual-action truss rod - Maple Fretboard - Metallic Blue',
                     'product_price': '10000',
                     'product_brand': 'Vault',
                     'specification': [
                       {
                         'spec_name': 'Item model number',
                         'spec_value': 'AS2S3D'
                       },
                       {
                         'spec_name': 'Color',
                         'spec_value': 'Green'
                       }
                     ]
                   }
                 ]
               },
               {
                 'name': 'drum',
                 'products': [
                   {
                     'category_type_id_parent': '1',
                     'category_type_id_child': '4',
                     'category_type_name': 'drum',
                     'product_id': '7',
                     'product_name': 'Behringer XD80USB Premium 8-Piece Electronic Drum Set (Silver)',
                     'product_price': '42586',
                     'product_brand': 'Behringer',
                     'specification': [
                       {
                         'spec_name': 'Color',
                         'spec_value': 'Black'
                       },
                       {
                         'spec_name': 'Item model number',
                         'spec_value': 'DFJDJ4JDFNJN'
                       }
                     ]
                   }
                 ]
               }
             ]
           },
           {
             'name': 'Acoustic',
             'children': [
               {
                 'name': 'guitar',
                 'products': [
                   {
                     'category_type_id_parent': '2',
                     'category_type_id_child': '20',
                     'category_type_name': 'guitar',
                     'product_id': '5',
                     'product_name': 'Gretsch G5422TG Hollow Bodied Double-Cut Guitar with Bigsby Walnut Stain ',
                     'product_price': '138224',
                     'product_brand': 'Gretsch',
                     'specification': [
                       {
                         'spec_name': 'Size',
                         'spec_value': '115.6 x 50.8 x 15.2 cm'
                       },
                       {
                         'spec_name': 'Item Weight',
                         'spec_value': '5.96 Kg'
                       },
                       {
                         'spec_name': 'Item model number',
                         'spec_value': 'G5422TG'
                       },
                       {
                         'spec_name': 'Color',
                         'spec_value': 'Walnut Stain'
                       }
                     ]
                   }
                 ]
               },
               {
                 'name': 'drum',
                 'products': [
                   {
                     'category_type_id_parent': '2',
                     'category_type_id_child': '22',
                     'category_type_name': 'drum',
                     'product_id': '4',
                     'product_name': 'Pearl CRB524FP/C731 Crystal Beat 4 Piece Shell Pack, Ruby Red (Cymbals/Hardware Sold Separately) ',
                     'product_price': '367840',
                     'product_brand': 'Pearl',
                     'specification': [
                       {
                         'spec_name': 'Item Weight',
                         'spec_value': '15.9 Kg'
                       },
                       {
                         'spec_name': 'Size',
                         'spec_value': '61 x 61 x 53.3 cm'
                       },
                       {
                         'spec_name': 'Item model number',
                         'spec_value': 'CRB524FP/C731'
                       },
                       {
                         'spec_name': 'Color',
                         'spec_value': 'Ruby Red'
                       }
                     ]
                   },
                   {
                     'category_type_id_parent': '2',
                     'category_type_id_child': '22',
                     'category_type_name': 'drum',
                     'product_id': '8',
                     'product_name': '6 Piece Mienl Drum kit Acoustic',
                     'product_price': '120000',
                     'product_brand': 'Mienl',
                     'specification': []
                   }
                 ]
               }
             ]
           }
         ]
       },
       {
         'name': 'Food',
         'children': [
           {
             'name': 'Potato chips',
             'children': [
               {
                 'name': 'garlic',
                 'products': [
                   {
                     'category_type_id_parent': '26',
                     'category_type_id_child': '25',
                     'category_type_name': 'garlic',
                     'product_id': '1',
                     'product_name': 'Lays Chips',
                     'product_price': '10',
                     'product_brand': 'Lays',
                     'specification': [
                       {
                         'spec_name': 'Size',
                         'spec_value': '20x40'
                       }
                     ]
                   }
                 ]
               }
             ]
           }
         ]
       },
       {
         'name': 'Medicine',
         'children': [
           {
             'name': 'headache',
             'children': [
               {
                 'name': 'front head',
                 'products': [
                   {
                     'category_type_id_parent': '23',
                     'category_type_id_child': '24',
                     'category_type_name': 'front head',
                     'product_id': '2',
                     'product_name': 'Combiflan Tablet',
                     'product_price': '24',
                     'product_brand': 'Combiflan',
                     'specification': [
                       {
                         'spec_name': 'Item Weight',
                         'spec_value': '500g'
                       },
                       {
                         'spec_name': 'Color',
                         'spec_value': 'blue'
                       },
                       {
                         'spec_name': 'Color',
                         'spec_value': 'White'
                       }
                     ]
                   }
                 ]
               }
             ]
           }
         ]
       }
     ];
   }
}
