

const infoPersonal1 = [
    { label: 'Edad', value: '24' },
    { label: 'Ciudad', value: 'Lima' },
    { label: 'Email', value: 'piero1235545@gmail.com' },
];

const infoPersonal2 = [
    { label: 'Pais', value: 'Peru' },
    { label: 'Freelance', value: 'Disponible' },
    { label: 'Whatsapp', value: '983902049' },
];
const InfoItem = ({ label, value }) => (
    <p>{label}: <span>{value}</span></p>
);
export const InfoPersonal = () => {
    return (
        <>
            <div className={"col-span-12 info-personal custom-sobre:col-span-6"}>
                {
                    infoPersonal1.map((info, index) => (
                        <InfoItem key={index} {...info}/>
                    ))
                }
            </div>
            <div className={"col-span-12 info-personal custom-sobre:col-span-6"}>
                {
                    infoPersonal2.map((info, index) => (
                        <InfoItem key={index} {...info}/>
                    ))
                }
            </div>
        </>
    )
}
