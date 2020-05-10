import styled from "styled-components";
import Link from "next/link";
import Card from "./Card/";

const Item = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	background: ${props => (props.background ? props.background : "#ffffff")};
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
	:hover {
		div {
			opacity: 1;
		}
	}
`;

const Backtext = styled.div`
	position: absolute;
	font-size: 6em;
	color: ${props => props.color};
	font-weight: bold;
	display: flex;

	span {
		line-height: 140px;
		margin: 32px;
	}
	@media (min-width: 320px) and (max-width: 1024px) {
		font-size: 5em;
	}
`;

const ProjectDiv = styled.div`
	width: 100%;
	margin-top: 100px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(4, 400px);

	@media (max-width: 767px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(7, 400px);
	}
`;

const Projects = props => (
	<ProjectDiv>
		<Item background={"#F4F4F4"}>
			<Link href="https://www.reportersuite.com/">
				<img style={{width: '100%'}} src="/websites/reportersuite.png"></img>
			</Link>
			<Card>
				<Card.Header>
					<div>9 people</div>
					<div>9 Months</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>spellcheck</Card.Background>
					<Card.Foreground>
						<Card.Title>Reporter Suite app</Card.Title>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src="/react.svg"></img>
					<img width="40" src="/redux.svg"></img>
					<img width="40" src="/node.js.svg"></img>
					<img width="40" src="/docker.svg"></img>
					<img width="40" src="/amazon.svg"></img>
				</Card.Stack>
			</Card>
		</Item>
		<Item background={"#2F2E41"}>
			<Link href="https://shop.magnolia.com/">
				<img style={{width: '100%'}} src="/websites/magnolia.png"></img>
			</Link>
			<Card>
				<Card.Header>
					<div>2 people</div>
					<div>5 Months</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>spellcheck</Card.Background>
					<Card.Foreground>
						<Card.Title>Magnolia Farms' eCommerce</Card.Title>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src="/react.svg"></img>
					<img width="40" src="/node.js.svg"></img>
					<img width="40" src="/firebase.svg"></img>
					<img width="40" src="/shopify.svg"></img>
				</Card.Stack>
			</Card>
		</Item>
		<Item background={"#0F9688"}>
			<Link href="https://www.what-song.com/">
				<img style={{width: '100%'}} src="/websites/whatsong.png"></img>
			</Link>
			<Card>
				<Card.Header>
					<div>Solo project</div>
					<div>3 Months</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>spellcheck</Card.Background>
					<Card.Foreground>
						<Card.Title>Soundtracks App</Card.Title>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src="/react.svg"></img>
					<img width="40" src="/redux.svg"></img>
				</Card.Stack>
			</Card>
		</Item>
		<Item background={"#CE5E5E"}>
			<Link href=" https://www.stuff4hire.com/">
				<img style={{width: '100%'}} src="/websites/stuff.png"></img>
			</Link>
			<Card>
				<Card.Header>
					<div>5 people</div>
					<div>6 Months</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>spellcheck</Card.Background>
					<Card.Foreground>
						<Card.Title>Stuff4Hire</Card.Title>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src="/react.svg"></img>
					<img width="40" src="/redux.svg"></img>
					<img width="40" src="/node.js.svg"></img>
				</Card.Stack>
			</Card>
		</Item>
		<Item background={"#303F9F"}>
			<Link href="https://my.pvolve.com/">
				<img style={{width: '100%'}} src="/websites/my.pvolve.png"></img>
			</Link>
			<Card>
				<Card.Header>
					<div>9 people</div>
					<div>7 Months</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>spellcheck</Card.Background>
					<Card.Foreground>
						<Card.Title>Fitness Website</Card.Title>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src="/vue.svg"></img>
					<img width="40" src="/laravel.svg"></img>
				</Card.Stack>
			</Card>
		</Item>
		<Item background={"#F4F4F4"}>
			<Link href="https://www.workspacegeek.com">
				<img style={{width: '100%'}} src="/websites/workspacegeek.png"></img>
			</Link>
			<Card>
				<Card.Header>
					<div>12 people</div>
					<div>16 Months</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>spellcheck</Card.Background>
					<Card.Foreground>
						<Card.Title>Workspace Geek</Card.Title>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src="/angular.svg"></img>
					<img width="40" src="/node.js.svg"></img>
					<img width="40" src="/docker.svg"></img>
					<img width="40" src="/amazon.svg"></img>
				</Card.Stack>
			</Card>
		</Item>
	</ProjectDiv>
);

export default Projects;
