import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import HeroCard from '../components/HeroCard'
import {HashLoader} from 'react-spinners'
const Teams = () => {
  const [load, setLoad] = useState(true)
  setTimeout(() => {
    setLoad(false)
  }, 3000);
  const css = `
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%)
  `
  return (
    <div className="">
    {load ? <HashLoader css={css} size={72} color="blue" /> :<div>
      <title>Choose Your Team!</title> 
      <Navbar icon="blue" background="blue"/>
      <div className="teams">
      <div className="teams-1">
        <h1 className="teams-heading">Marvel</h1>
        <div className="teams-cards">
            <HeroCard
            name="Black Widow"
            link="https://www.marvel.com/characters/black-widow-natasha-romanoff"
            img="https://freepngimg.com/thumb/black_widow/20098-3-black-widow-transparent-background.png"
            text="Natasha Romanoff, separated from the now-fractured Avengers, confronts the dark path she took to becoming a spy and assassin, as well as events that followed."
            />
            <HeroCard
            name="Spider Man"
            link="https://www.marvel.com/characters/spider-man-peter-parker"
            img="https://freepngimg.com/thumb/spiderman/35927-3-spiderman-comic-transparent-background.png"
            text="Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others."
            />           
            <HeroCard
            name="Iron Man"
            link="https://www.marvel.com/characters/iron-man-tony-stark"
            img="https://freepngimg.com/thumb/iron_man/23063-8-iron-man-flying-transparent-background.png"
            text="Genius. Billionaire. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man."
            />
            <HeroCard
            name="Captain America"
            link="https://www.marvel.com/characters/captain-america-steve-rogers"
            img="https://freepngimg.com/thumb/captain_america/6-2-captain-america-png-image.png"
            text="Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers."
            />
            <HeroCard
            name="Thor"
            link="https://www.marvel.com/characters/thor-thor-odinson"
            img="https://freepngimg.com/thumb/thor/2-2-thor-free-download-png.png"
            text="The son of Odin uses his powers as the God of Thunder to protect his home Asgard and planet Earth alike."
            />

          <HeroCard
            name="Hulk"
            link="https://www.marvel.com/characters/hulk-bruce-banner"
            img="https://freepngimg.com/thumb/hulk/20285-3-hulk-transparent-background.png"
            text="Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage."
            />
        </div>
      </div>
        {/* DC */}
        <div className="teams-2">
        <h1 className="teams-heading">DC</h1>
        <div className="teams-cards">
            <HeroCard
            name="Wonder Woman"
            link="https://www.dccomics.com/characters/wonder-woman"
            img="https://freepngimg.com/thumb/wonder_woman/21217-3-wonder-woman-free-download.png"
            text="Beautiful as Aphrodite, wise as Athena, swifter than Hermes, and stronger than Hercules, Princess Diana of Themyscira fights for peace in Man's World."
            />
            <HeroCard
            name="Super Man"
            link="https://www.dccomics.com/characters/superman"
            img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f359881d-6bb2-4391-aba6-779f7084edd4/da44xzp-7bb1d57f-1333-48a0-8b85-e206063d4cbc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YzNTk4ODFkLTZiYjItNDM5MS1hYmE2LTc3OWY3MDg0ZWRkNFwvZGE0NHh6cC03YmIxZDU3Zi0xMzMzLTQ4YTAtOGI4NS1lMjA2MDYzZDRjYmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GKL0ddeSiBXQTZZ3EKzSvsKHaqoYqT6RpM1LGUXYeJM"
            text="Faster than a speeding bullet, more powerful than a locomotive… The Man of Steel fights a never-ending battle for truth, justice, and the American way"
            />           
            <HeroCard
            name="Batman"
            link="https://www.dccomics.com/characters/batman"
            img="https://freepngimg.com/thumb/batman/20724-2-batman-transparent-image.png"
            text="In the name of his murdered parents, Bruce Wayne wages eternal war on the criminals of Gotham City. He is vengeance. He is the night. He is Batman."
            />
            <HeroCard
            name="Cyborg"
            link="https://www.dccomics.com/characters/cyborg"
            img="https://pngimg.com/uploads/cyborg/cyborg_PNG50.png"
            text="  ."
            />
            <HeroCard
            name="Flash"
            link="https://www.dccomics.com/characters/the-flash"
            img="https://freepngimg.com/thumb/flash/21645-7-flash-photos.png"
            text="Three men have held the title of 'The Fastest Man Alive'—Jay Garrick, Barry Allen and Wally West. Each of them redefined the word 'hero.'"
            />

          <HeroCard
            name="AquaMan"
            link="https://www.dccomics.com/characters/aquaman"
            img="https://i.ibb.co/ZdFMBGX/aquaman-aquaman-11563256343fix0pglw45-removebg-preview.png"
            text="The son of a lighthouse keeper and an Atlantean queen, Arthur Curry is the bridge between the surface world and his tumultuous realm of the sea."
            />
        </div>
      </div>
      </div>
    </div> }
    </div>
  )
}

export default Teams
