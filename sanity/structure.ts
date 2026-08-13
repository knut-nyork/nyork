import {CogIcon} from '@sanity/icons/Cog'
import {DocumentIcon} from '@sanity/icons/Document'
import {HomeIcon} from '@sanity/icons/Home'
import type {ComponentType} from 'react'
import type {StructureBuilder, StructureResolver} from 'sanity/structure'

/**
 * Gruppert etter hva redaktørene tenker på, ikke etter teknisk type — se
 * CLAUDE.md. «Globale innstillinger» og «Reguleringsregler» er singletons:
 * det skal aldri finnes mer enn ett dokument av hver, håndhevet her ved å
 * låse dem til en fast dokument-ID og filtrere dem bort fra listene under.
 */

const SINGLETONS = ['innstillinger', 'reguleringsregler']
const GRUPPERT_ANNET_STED = ['hyttemodell', 'enhet', 'omradeInnhold', 'artikkel', 'side', 'megler', 'dokument']

function singleton(S: StructureBuilder, typeName: string, title: string, icon: ComponentType) {
  return S.listItem()
    .title(title)
    .icon(icon)
    .child(S.document().schemaType(typeName).documentId(typeName).title(title))
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Nyørk')
    .items([
      singleton(S, 'innstillinger', 'Globale innstillinger', CogIcon),
      singleton(S, 'reguleringsregler', 'Reguleringsregler', DocumentIcon),

      S.divider(),

      S.listItem()
        .title('Hytter og tomter')
        .icon(HomeIcon)
        .child(
          S.list()
            .title('Hytter og tomter')
            .items([
              S.documentTypeListItem('hyttemodell').title('Hyttemodeller'),
              S.documentTypeListItem('enhet').title('Enheter (hytter/tomter)'),
            ]),
        ),

      S.documentTypeListItem('omradeInnhold').title('Området — seksjoner'),
      S.documentTypeListItem('artikkel').title('Nyheter'),
      S.documentTypeListItem('side').title('Sider'),
      S.documentTypeListItem('megler').title('Meglere'),
      S.documentTypeListItem('dokument').title('Dokumenter'),

      S.divider(),

      // Alt annet registrert i schema.types som ikke er håndtert over eller er en singleton
      ...S.documentTypeListItems().filter(
        (listItem) => ![...SINGLETONS, ...GRUPPERT_ANNET_STED].includes(listItem.getId() as string),
      ),
    ])
