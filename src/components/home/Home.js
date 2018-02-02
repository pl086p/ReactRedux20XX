import React from 'react';
import { Panel } from 'react-bootstrap';
import  SplitPane from 'react-split-pane';


const Home = () => {
    
    return (
    <div>
    <Panel bsStyle="default">
                                                
        <h4>Home Page Title</h4>
        
     </Panel>

     <SplitPane split="vertical" minSize={200} defaultSize={300}>
        <div><h5>Common Component</h5>
            - Main Menu: with react-bootstrap tab<br />
            - Header<br />
            - Footer<br />
        </div>
        <SplitPane split="horizontal" minSize={100} defaultSize={200}>
            <div><h5>Tab Home</h5>
                - Home Page Title: with react-bootstrap panel<br />
                - Home Page Body: with react-split-pane<br />
            </div>
            <div>right bottom</div>
        </SplitPane>
    </SplitPane>
    </div>
    );
};

export default Home;