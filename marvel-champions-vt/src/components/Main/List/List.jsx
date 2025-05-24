import AgentsOfShield from "./AgentsOfShield";
import CoreSet from "./CoreSet";
import GalaxysMostWanted from "./GalaxysMostWanted";
import MojoMania from "./MojoMania";
import MutantGenesis from "./MutantGenesis";
import NextEvolution from "./NextEvolution";
import SinisterMotives from "./SinisterMotives";
import TheAgeOfApocalypse from "./TheAgeOfApocalypse";
import TheGreenGoblin from "./TheGreenGoblin";
import TheHood from "./TheHood";
import TheMadTitansShadow from "./TheMadTitansShadow";
import TheOnceAndFutureKang from "./TheOnceAndFutureKang";
import TheRiseOfRedSkull from "./TheRiseOfRedSkull";
import TheWreckingCrew from "./TheWreckingCrew";
import VillainEncounters from "./VillainEncounters";


const List = () => {
  
  return <>

    <VillainEncounters name={"coreSet"} villains={["rhyno", "klaw", "ultron"]} setNum={"2"}/>
    <VillainEncounters name={"theGreenGoblin"} villains={["riskyBusiness", "mutagenFormula"]} setNum={"1"}/>
    <VillainEncounters name={"theWreckingCrew"} shortName={"theWreckingCrew"}/>
    <VillainEncounters name={"theRiseOfRedSkull"} villains={["crossbones", "absorbingMan", "taskmaster", "zola", "redSkull"]} setNum={"2"}/>
    <VillainEncounters name={"theOnceAndFutureKang"} shortName={"kang"}/>
    <VillainEncounters name={"galaxysMostWanted"} villains={["brotherhoodOfBadoon", "collector1", "collector2", "nebula", "ronan"]} setNum={"2"}/>
    <VillainEncounters name={"theMadTitansShadow"} villains={["ebonyMaw", "towerDefense", "thanos", "hela", "loki"]} setNum={"2"}/>
    <VillainEncounters name={"theHood"} shortName={"theHood"}/>
    <VillainEncounters name={"sinisterMotives"} villains={["sandman", "venom", "mysterio", "sinisterSix", "venomGoblin"]} setNum={"2"}/>
    <VillainEncounters name={"mutantGenesis"} villains={["sabretooth", "sentinel", "masterMold", "mansionAttack", "magneto"]} setNum={"2"}/>
    <VillainEncounters name={"mojoMania"} villains={["magog", "spiral", "mojo"]} setNum={"2"}/>
    <VillainEncounters name={"nextEvolution"} villains={["morlockSiege", "onTheRun", "juggernaut", "misterSinister", "stryfe"]} setNum={"1"}/>
    <VillainEncounters name={"theAgeOfApocalypse"} villains={["unus", "fourHorsemen", "apocalypse", "darkBeast", "enSabahNur"]} setNum={"1"}/>
    <VillainEncounters name={"agentsOfShield"} villains={["blackWidow", "batroc", "modok", "thunderbolts", "baronZemo"]} setNum={"1"}/>
    {/* <CoreSet/> */}
    {/* <TheGreenGoblin/> */}
    {/* <TheWreckingCrew/> */}
    {/* <TheRiseOfRedSkull/> */}
    {/* <TheOnceAndFutureKang/> */}
    {/* <GalaxysMostWanted/> */}
    {/* <TheMadTitansShadow/> */}
    {/* <TheHood/> */}
    {/* <SinisterMotives/> */}
    {/* <MutantGenesis/> */}
    {/* <MojoMania/> */}
    {/* <NextEvolution/> */}
    {/* <TheAgeOfApocalypse/> */}
    {/* <AgentsOfShield/> */}
    
  </>;

}

export default List;
