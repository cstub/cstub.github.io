import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Impressum' })

export default function Impressum() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Impressum
          </h1>
        </div>
        <div className="container py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Name</h2>
                <p className="text-gray-600 dark:text-gray-400">Christoph Stumpf MSc.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Firmenname</h2>
                <p className="text-gray-600 dark:text-gray-400">B.Sc. Christoph Stumpf</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  Standort der Gewerbeberechtigung
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Nachtigallweg 1 Haus 12
                  <br />
                  2384 Breitenfurt bei Wien | Österreich
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Rechtsform</h2>
                <p className="text-gray-600 dark:text-gray-400">Einzelunternehmen</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  Unternehmensgegenstand
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Kontaktdaten</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  E-Mail: office [at] christoph-stumpf [dot] com
                  <br />
                  Kontaktformular:
                  <a
                    href="https://forms.gle/umrqqTR1GxsYgbYi9"
                    className="pl-1 text-primary-500 hover:text-primary-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">UID-Nummer</h2>
                <p className="text-gray-600 dark:text-gray-400">ATU64688859</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  Mitgliedschaften
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Mitglied der Wirtschaftskammer Niederösterreich
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  Anwendbare Rechtsvorschriften
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Gewerbeordnung:{' '}
                  <a
                    href="http://www.ris2.bka.gv.at"
                    className="text-primary-500 hover:text-primary-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.ris.bka.gv.at
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  Aufsichtsbehörde/Gewerbebehörde
                </h2>
                <p className="text-gray-600 dark:text-gray-400">Bezirkshauptmannschaft Mödling</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Fachgruppe</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  FG Unternehmensberatung, Buchhaltung und Informationstechn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
