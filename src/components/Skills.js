import React from 'react';
import styled from 'styled-components';
import { BlockSection, InnerWrapper, Content } from './styles/Wrappers';

const Skills = () => {
  const skills = [
    {
      name: 'CODE',
      tags: [
        'JavaScript ES6',
        'React',
        'Redux',
        'HTML5',
        'CSS3',
        'GitHub',
        'API:s',
        'Node.js',
        'Git'
      ]
    },
    {
      name: 'TOOLBOX',
      tags: [
        'VSCode',
        'Google Cloud',
        'MongoDB',
        'Figma',
        'Slack',
        ' Netlify'
      ]
    },
    {
      name: 'MORE',
      tags: ['Agile methodology', 'Scrum']
    }
  ];

  return (
    <BlockSection>
      <InnerWrapper>
        <h3>Skills</h3>
        <List>
          {skills.map((skill) => {
            return (
              <ClonedContent key={skill.name}>
                <h4>{skill.name}</h4>

                {skill.tags.map((tag) => {
                  return (
                    <div key={tag}>
                      <p>{tag}</p>
                    </div>
                  );
                })}
              </ClonedContent>
            );
          })}
        </List>
      </InnerWrapper>
    </BlockSection>
  );
};

export default Skills;

const ClonedContent = styled(Content)`
  text-align: center;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;