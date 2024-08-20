// Interface pour représenter un jeu
interface Game {
  id: string;
  name: string;
  description: string;
  websiteUrl: string;
  tests: Test[];
}

// Interface de base pour un test
interface BaseTest {
  id: string;
  title: string;
  description: string;
}

// Interface pour un test de type "Sort"
interface SortTest extends BaseTest {
  type: "sort";
  videos: Video[];
}

// Interface pour un test de type "Guess Quality"
interface GuessQualityTest extends BaseTest {
  type: "guessQuality";
  video: Video;
  qualityOptions: string[];
}

// Union type pour représenter les deux types de tests
type Test = SortTest | GuessQualityTest;

// Interface pour représenter une vidéo
interface Video {
  id: string;
  url: string;
  title?: string;
}
