import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want.',
            id: '1',
        },
        {
            label: 'Can I use Vue on a project?',
            content: 'You can use Vue on any project you want.',
            id: '2',
        },
        {
            label: 'Can I use Angular on a project?',
            content: 'You can use Angular on any project you want.',
            id: '3',
        }
    ]

    return (
        <Accordion items={items}/>
    )
}

export default AccordionPage