// Write your Character component here
import React from "react"
import styled from 'styled-components'

const StyledCharacter = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 2px solid white;

  background-color: ${pr => pr.theme.primaryColor};
  color: ${pr => pr.theme.white};

  @media ${pr => pr.theme.breakpointMobile} {
    width: initial;
  }

  //psuedo classes
  // :active, :hover etc.
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${pr => pr.theme.secondaryColor};
  }

  &::before {
    content: "${props => props.gender === 'n/a' ? '🤖' : '👨'}"
  }
`

const Character = (props) => {
    return (
        <StyledCharacter gender = {props.character.gender}>
            <h2>{props.character.name}</h2>
            <span>{props.character.birth_year}</span>

            <div className="details">
                <div className="detail">
                    <p>
                        Gender: {props.character.gender}
                    </p>
                </div>
                <div className="detail">
                    <p>
                        Height: {props.character.height}
                    </p>
                </div>
                <div className="detail">
                    <p>
                        Gender: {props.character.gender}
                    </p>
                </div>
            </div>
        </StyledCharacter>
    )
}

export default Character;