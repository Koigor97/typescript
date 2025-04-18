
// TODO-1: Ticket #AO1 - Developer Aliases List

let developerUsernames: string[] = ["sam_dev", "emily_qt", "max_code"]

export const developerAliases = () => {
    developerUsernames.forEach((dev, idx) => {
        console.log(`Developer #${idx}: ${dev}`);
    })
    console.log("")

};

// TODO-2: Ticket #AO2 = Intern Info Tuple

type InterTupleType = [string, string, number];

const listOfInterTuples: InterTupleType[] = [
    ["Koigor Fogbawa", "Dev", 10],
    ["Juliana Alpha", "QA", 10],
    ["Sam Turay", "DevOps", 40],
    ["Sarah Turay", "Design", 25],
]

export const interInfoTuples = () => {
    listOfInterTuples.forEach((interTuple: InterTupleType) => {
        console.log(`${interTuple[0]} from ${interTuple[1]} has completed ${interTuple[2]} weeks`);
    })

    console.log("")

}

// TODO-3: Ticket #AO3 = Read-only MIME Types

export const acceptedMIMETypes : readonly string[] = [
    "pdf",
    "docx",
    "png",
    "jpeg",
    "jpg",
    "svg"
]

// TODO-4: Ticket #AO4 = Feature Flags Enum
enum featureFlags {
    ENABLED = "enabled",
    DISABLED = "disabled",
    BETA = "beta",
}

export const featureFlag = () => console.log(`Current feature state: ${featureFlags.BETA.charAt(0).toUpperCase() + featureFlags.BETA.substring(1)}`);
