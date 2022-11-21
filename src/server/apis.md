##### Character

#   create character
    Axios.post('http://localhost:3002/api/characters/create', {name:name, race:race, classId:classId, level:level, creatorId:creatorId, campaignId:campaignId, description:description})

#   get all characters
    Axios.get("http://localhost:3002/api/characters/get")

#   get all from campaign
    Axios.get('http://localhost:3002/api/characters/getByCampaign', {campaignId:campaignId})

#   get character by id
    Axios.get('http://localhost:3002/api/characters/getById', {id:id})


##### Campaign

#   create campaign
    Axios.post('http://localhost:3002/api/campaigns/create', {name: name, creatorId: creatorId})

#   get all campaigns
    Axios.get('http://localhost:3002/api/campaigns/get')


Trebam jedan call koji mi daje cijelog charactera i odmah mi pljune ime klase, autora i kampanje da ne radim 3 get requesta
Trebam get all characters i campaigns (ovo mogu bit dva request, kako god mislis da je bolje
Treba dodat description stupac u kampanja


    