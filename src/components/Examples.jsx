import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from "./TabButton.jsx"
import Section from './Section.jsx';
import Tabs from './tabs.jsx';
export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    let tabContent = <p>Please Select a topic.</p>;
    if (selectedTopic) {
        tabContent = <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>
    }

    const handleClick = (selectedButton) => {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
        // console.log(selectedButton);
        // console.log(selectedTopic);
    };

    // console.log("App Component executing");

    return (
        <Section title='Examples' id="examples">
            <Tabs
                // buttonsContainer="menu" 
                buttons={<>
                    <TabButton isSelected={selectedTopic === 'components'}
                        onClick={() => handleClick('components')} label="Component" />
                    <TabButton isSelected={selectedTopic === 'jsx'}
                        onClick={() => handleClick('jsx')} label="JSX" />
                    <TabButton isSelected={selectedTopic === 'props'}
                        onClick={() => handleClick('props')} label="Props" />
                    <TabButton isSelected={selectedTopic === 'state'}
                        onClick={() => handleClick('state')} label="State" /></>}
            >
                {tabContent}
            </Tabs>
        </Section>
    )
}