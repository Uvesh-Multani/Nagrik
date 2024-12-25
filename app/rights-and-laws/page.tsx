import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const rights = [
  {
    title: "Right to Equality",
    description: "Equality before law and equal protection of laws",
    details: "Articles 14-18 of the Indian Constitution guarantee the right to equality. This includes equality before the law, prohibition of discrimination on grounds of religion, race, caste, sex or place of birth, equality of opportunity in matters of public employment, abolition of untouchability and abolition of titles.",
    link: "https://legislative.gov.in/constitution-of-india"
  },
  {
    title: "Right to Freedom",
    description: "Freedom of speech, expression, assembly, association, movement, etc.",
    details: "Articles 19-22 protect various freedoms including speech and expression, assembly, association, movement, residence, and the right to practice any profession. It also provides protection in respect of conviction for offenses and protection of life and personal liberty.",
    link: "https://legislative.gov.in/constitution-of-india"
  },
  {
    title: "Right against Exploitation",
    description: "Prohibition of traffic in human beings and forced labor",
    details: "Articles 23-24 prohibit traffic in human beings, begar (forced labor), and other similar forms of forced labor. They also prohibit employment of children in factories, mines or other hazardous employment.",
    link: "https://legislative.gov.in/constitution-of-india"
  },
  {
    title: "Right to Freedom of Religion",
    description: "Freedom of conscience and free profession, practice and propagation of religion",
    details: "Articles 25-28 provide religious freedom to all citizens and ensure a secular state in India. It provides freedom of conscience, profession, practice and propagation of religion, freedom to manage religious affairs, freedom from taxation for promotion of any religion, and freedom to attend religious instruction or worship in certain educational institutions.",
    link: "https://legislative.gov.in/constitution-of-india"
  },
  {
    title: "Cultural and Educational Rights",
    description: "Protection of interests of minorities",
    details: "Articles 29-30 protect the interests of minorities by providing them the right to conserve their language, script and culture, and the right to establish and administer educational institutions of their choice.",
    link: "https://legislative.gov.in/constitution-of-india"
  },
  {
    title: "Right to Constitutional Remedies",
    description: "Right to move the Supreme Court for enforcement of Fundamental Rights",
    details: "Article 32 provides the right to move the Supreme Court for the enforcement of the Fundamental Rights. This makes the Fundamental Rights real and effective.",
    link: "https://legislative.gov.in/constitution-of-india"
  },
  {
    title: "Right to Education",
    description: "Free and compulsory education for all children between the ages of 6 and 14",
    details: "Article 21A provides free and compulsory education to all children between the ages of 6 and 14 years. This was added by the 86th Constitutional Amendment Act, 2002.",
    link: "https://mhrd.gov.in/rte"
  },
  {
    title: "Right to Information",
    description: "Right to access information from public authorities",
    details: "The Right to Information Act, 2005 mandates timely response to citizen requests for government information. It's an initiative taken by the Department of Personnel and Training, Ministry of Personnel, Public Grievances and Pensions to provide a RTI Portal Gateway to the citizens for quick search of information on the details of first Appellate Authorities, PIOs etc. amongst others, besides access to RTI related information / disclosures published on the web by various Public Authorities under the government of India as well as the State Governments.",
    link: "https://rti.gov.in/"
  },
]

export default function RightsAndLaws() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Rights & Laws</h1>
      <p className="text-xl">Learn about your fundamental rights and important laws in India</p>

      <div className="grid gap-6">
        {rights.map((right, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{right.title}</CardTitle>
              <CardDescription>{right.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="details">
                  <AccordionTrigger>Learn More</AccordionTrigger>
                  <AccordionContent>
                    {right.details}
                    <div className="mt-4">
                      <Button asChild>
                        <Link href={right.link} target="_blank" rel="noopener noreferrer">
                          Read Full Text
                        </Link>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

