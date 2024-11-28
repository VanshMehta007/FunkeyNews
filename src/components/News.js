import React, { Component } from 'react'
import NewItems from './NewItems'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Kevin Buckland, Ankur Banerjee",
            "title": "Dollar climbs, stocks retreat after Trump vows tariffs - Reuters",
            "description": "The dollar rallied sharply on Tuesday after U.S. President-elect Donald Trump pledged tariffs on all imports from Canada and Mexico, and additional tariffs on China.",
            "url": "https://www.reuters.com/markets/global-markets-wrapup-1-2024-11-26/",
            "urlToImage": "https://www.reuters.com/resizer/v2/VVPUANY7UJONRDTMMGLRORF4Z4.jpg?auth=5c685192ab86d3c822d8e09265d07b7964168a0870f9b763a46a299877c1d8f3&height=1005&width=1920&quality=80&smart=true",
            "publishedAt": "2024-11-26T06:22:00Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Guy Faulconbridge, Lidia Kelly",
            "title": "Russia advances in Ukraine at fastest monthly pace since start of war, analysts say - Reuters.com",
            "description": "Russian forces are advancing in Ukraine at the fastest rate since the early days of the 2022 invasion, taking an area half the size of Greater London over the past month, analysts and war bloggers say.",
            "url": "https://www.reuters.com/world/europe/russia-advances-ukraine-fast-pace-moving-into-kurakhove-analysts-say-2024-11-26/",
            "urlToImage": "https://www.reuters.com/resizer/v2/KYDLCQMW3FLHND2JYFL2A2VUII.jpg?auth=c043e31476892b9368396e81e72e3cb59e7ad3a9d5df2a292a4161870384bed9&height=1005&width=1920&quality=80&smart=true",
            "publishedAt": "2024-11-26T05:50:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "2024-11-26T05:34:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": null,
                "name": "The Mercury News"
            },
            "author": "Lisa M. Krieger",
            "title": "Raw milk nearly killed her son. Now avian flu is bringing more attention to its risk - The Mercury News",
            "description": "The dairy behind flu-contaminated milk is linked to 7 previous recalls and at least 35 illnesses.",
            "url": "https://www.mercurynews.com/2024/11/25/raw-milk-avian-flu/",
            "urlToImage": "https://www.mercurynews.com/wp-content/uploads/2024/05/US-NEWS-HEALTH-BIRDFLU-QA-GET.jpg?w=1024&h=695",
            "publishedAt": "2024-11-26T04:49:15Z",
            "content": "So far, there have been no reports of illness associated with the bird flu virus that was identified this weekend in a retail sample of raw milk from a Fresno-based dairy.\r\nBut the dairy behind the b… [+7263 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": null,
            "title": "Pakistani police fire tear gas as thousands supporting Imran Khan arrive near capital - CNN",
            "description": "Pakistani police Monday fired tear gas canisters at supporters of imprisoned former Prime Minister Imran Khan to stop them from entering the capital, where they hoped to stage a sit-in to demand his release, officials said.",
            "url": "https://www.cnn.com/2024/11/25/asia/pakistan-imran-khan-protests-intl-latam/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2185959887.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-11-26T04:28:00Z",
            "content": "Pakistani police Monday fired tear gas canisters at supporters of imprisoned former Prime Minister Imran Khan to stop them from entering the capital, where they hoped to stage a sit-in to demand his … [+4019 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBCSports.com"
            },
            "author": "Charean Williams",
            "title": "Monday Night Football: Ravens run over Chargers 30-23 as John Harbaugh beats Jim Harbaugh - NBC Sports",
            "description": "The Ravens gained 389 yards, including 212 rushing yards, to move to 8-4.",
            "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/monday-night-football-ravens-run-over-chargers-as-john-harbaugh-beats-jim-harbaugh",
            "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/9cf4456/2147483647/strip/true/crop/3000x1688+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fa7%2Ffb%2Febbc54de4f9b989fb8539d495045%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2186899821",
            "publishedAt": "2024-11-26T04:24:05Z",
            "content": "Jim Harbaugh hasnt had much trouble beating many people in his long career as a college and NFL coach, but he hasnt had any luck against his brother, John.\r\nJohn ran his record to 3-0 against his bro… [+1562 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Lebanon ceasefire: Israeli cabinet to discuss Hezbollah deal - BBC.com",
            "description": "The ceasefire would reportedly be for an initial 60 days and include the withdrawal of Israeli forces from Lebanon.",
            "url": "https://www.bbc.com/news/articles/c93qe2v1n3eo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3af2/live/7b58af10-ab8e-11ef-bb23-5d637c493a44.jpg",
            "publishedAt": "2024-11-26T03:34:17Z",
            "content": "The Israeli cabinet will meet to discuss approval of a ceasefire to temporarily end hostilities with the Lebanese militia Hezbollah.\r\nThe proposed truce would be for an initial period of 60 days and … [+3835 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WSET"
            },
            "author": "GEOFF HARRIS | The National News Desk",
            "title": "Vaping impacts blood vessels & oxygen, new study says - WKRC TV Cincinnati",
            "description": "According to new research presented at the Radiological Society of North America, vaping has an immediate effect on how a person's blood vessels work.",
            "url": "https://wset.com/news/nation-world/vaping-impacts-blood-vessels-oxygen-new-study-says-nicotine-radiological-society-of-north-america-breathing-ecigarette-health-long-term-effects-fda",
            "urlToImage": "https://wset.com/resources/media/400cc41b-ce7a-4916-9a85-fcc22aef72d3-large16x9_AP24025552944497.jpg",
            "publishedAt": "2024-11-26T03:23:21Z",
            "content": "WASHINGTON (TNND) Nicotine or not, a new study is looking into how vaping affects your health. According to new research presented at the annual meeting of the Radiological Society of North America, … [+1843 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "2024-11-26T03:20:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Nathaniel Meyersohn",
            "title": "Walmart rolls back DEI programs after right-wing backlash - CNN",
            "description": "Walmart, the largest private employer in the United States, will curb some diversity, equity and inclusion (DEI) efforts. It’s the latest company to backtrack on diversity initiatives in the face of right-wing pressure.",
            "url": "https://www.cnn.com/2024/11/25/business/walmart-dei-rollback/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2185293124.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-11-26T03:11:00Z",
            "content": "Walmart, the largest private employer in the United States, will curb some diversity, equity and inclusion (DEI) efforts. Its the latest company to backtrack on diversity initiatives in the face of r… [+1731 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Natalie Oganesyan",
            "title": "Keira Knightley Rules Out Franchises After Experience With ‘Pirates Of The Caribbean’: “I Was Taken Down Publicly” - Deadline",
            "description": "Having been in the limelight since she was 17 with 'Pirates of the Caribbean,' Keira Knightley said she has ruled out returning to franchises.",
            "url": "http://deadline.com/2024/11/keira-knightley-pirates-of-the-caribbean-franchise-ruled-out-1236187567/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2024/11/keira-knightley.jpg?w=1024",
            "publishedAt": "2024-11-26T03:07:00Z",
            "content": "Having been in the limelight since she was 17 with the Pirates of the Caribbeanfilms, two-time Oscar nominee Keira Knightley said she has since ruled out returning to the franchise world.\r\n“It’s a fu… [+2196 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Jeff Eisenberg",
            "title": "Transgender volleyball controversy: Judge rules San Jose State women’s volleyball player eligible to play in conference tournament - Yahoo Sports",
            "description": "A federal judge denied emergency injunctive relief despite complaints from competitors who object to the Spartans player's participation on the grounds that ...",
            "url": "https://sports.yahoo.com/transgender-volleyball-controversy-judge-rules-san-jose-state-womens-volleyball-player-eligible-to-play-in-conference-tournament-004235078.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Yp2y_VMg2u1B0W6T87Deyg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-11/fecb4ed0-ab8d-11ef-b0d5-37512b75f421",
            "publishedAt": "2024-11-26T02:42:00Z",
            "content": "San Jose State women's volleyball is 14-5 this season. (Photo by Andrew Wevers/Getty Images)\r\nA San Jose State womens volleyball player is eligible to play in her conference tournament this week, a f… [+6031 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jackie Wattles",
            "title": "Astronauts had to shut down a Russian space station module due to ‘unusual odor’ from spacecraft - CNN",
            "description": "A Russian segment of the International Space Station was locked down this weekend after cosmonauts found an “unusual odor” emanating from a visiting cargo capsule, NASA said.",
            "url": "https://www.cnn.com/2024/11/25/science/astronauts-space-station-odor-russian-module/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/blog-90p-dock-112324.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-11-26T02:32:00Z",
            "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nRussian cosmonauts on the International Space Station … [+3749 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": "Associated Press",
            "title": "New hearing ordered on The Onion’s bid for Alex Jones’ Infowars - POLITICO",
            "description": "Jones alleges fraud and collusion marred the bankruptcy auction.",
            "url": "https://www.politico.com/news/2024/11/25/onion-alex-jones-infowars-hearing-00191616",
            "urlToImage": "https://static.politico.com/6d/e1/9523081a46c5b0d37fcfd90894e3/newtown-shooting-infowars-10170.jpg",
            "publishedAt": "2024-11-26T01:39:59Z",
            "content": "I want a fair and transparent process and lets just see where the process goes, Lopez said.\r\nLopez could ultimately allow The Onion to move forward with its purchase, order a new auction or name the … [+5031 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "UConn's Dan Hurley fumes over 'sh--ty calls' by referees after Memphis shocks Huskies in Maui Invitational - CBS Sports",
            "description": "Hurley put the officials on blast after several late controversial calls in Tigers' upset of No. 2 UConn in a Maui classic",
            "url": "https://www.cbssports.com/college-basketball/news/uconns-dan-hurley-fumes-over-sh-ty-calls-by-referees-after-memphis-shocks-huskies-in-maui-invitational/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/11/26/471ed078-0409-4f61-86dc-fa4f25982697/thumbnail/1200x675/8438200234fb47214cb489ff27cbe193/gettyimages-2186078934-1.jpg",
            "publishedAt": "2024-11-26T01:38:00Z",
            "content": "LAHAINA, Hawaii Monday saw one of the best Maui Invitational games in the 40-plus-year history of the event. \r\nUnranked Memphis beat No. 2 UConn 99-97 in overtime after an absurd 18-5 UConn comeback … [+5920 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WEAR"
            },
            "author": "Tanner Stewart",
            "title": "Trump endorses Florida CFO as Gaetz's replacement for Congress, Salzman backs out of race - WEAR",
            "description": "President-elect Donald Trump is endorsing Florida's chief financial officer for Congress.",
            "url": "https://weartv.com/news/local/trump-endorses-florida-cfo-as-gaetzs-replacement-for-congress-salzman-backs-out-of-race",
            "urlToImage": "https://weartv.com/resources/media2/16x9/1280/986/center/90/30674cb1-a101-443d-b6bd-527a931ed1ed-JPat.png",
            "publishedAt": "2024-11-26T01:30:00Z",
            "content": "ESCAMBIA COUNTY, Fla. (WEAR) -- President-elect Donald Trump is endorsing Florida's chief financial officer for Congress.\r\nTrump made the announcement about Jimmy Patronis on Truth Social Monday, say… [+2009 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Kelsey Vlamis",
            "title": "California proposes its own EV buyer credit — which could cut out Elon Musk's Tesla - Business Insider",
            "description": "California Gov. Gavin Newsom said he'll restart a rebate program if Trump ends the federal EV tax credit, but Tesla models could be excluded.",
            "url": "https://www.businessinsider.com/california-proposes-ev-buyer-credit-excludes-elon-musk-tesla-2024-11",
            "urlToImage": "https://i.insider.com/674506b19f2901eb6036d14e?width=1200&format=jpeg",
            "publishedAt": "2024-11-26T01:15:50Z",
            "content": "California Gov. Gavin Newsom is preparing to step in if President-elect Donald Trump fulfills his promise to axe the federal electric-vehicle tax credit but one notable EV maker could be left out.\r\nN… [+3436 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Karina Tsui, Amanda Jackson, Caroll Alvarado",
            "title": "Father of missing Hawaii woman Hannah Kobayashi found dead in Los Angeles, police say - CNN",
            "description": "The father of a Hawaii woman who went missing two weeks ago was found dead on Sunday, the Los Angeles Police Department said.",
            "url": "https://www.cnn.com/2024/11/25/us/hannah-kobayashi-father-found-dead-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/still-21145738-33633-633-still.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-11-26T00:09:00Z",
            "content": "Editors Note: This story contains discussion of suicide. Help is available if you or someone you know is struggling with suicidal thoughts or mental health matters.\r\nIn the US: Call or text 988, the … [+4869 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sports Illustrated"
            },
            "author": "Bob Harig",
            "title": "Tiger Woods Will Not Play in His Hero World Challenge - Sports Illustrated",
            "description": "Woods had back surgery in September after playing just five tournaments in 2024.",
            "url": "https://www.si.com/golf/tiger-woods-will-not-play-hero-world-challenge",
            "urlToImage": "https://images2.minutemediacdn.com/image/upload/c_crop,w_3969,h_2232,x_1647,y_425/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01jdjpw86y4kh1ty183y.jpg",
            "publishedAt": "2024-11-25T22:27:10Z",
            "content": "Tiger Woods will not participate in next weeks Hero World Challenge, the annual charity event in the Bahamas that benefits his foundation.\r\nWoods announced the final three players in the field on Mon… [+2490 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "VOA News"
            },
            "author": "VOA Learning English",
            "title": "Doctors Give New Guidelines for Preventing Stroke - VOA Learning English",
            "description": "New research shows that the majority of strokes could be prevented. And new guidelines are aimed at helping people and their doctors do just that.",
            "url": "https://learningenglish.voanews.com/a/doctors-give-new-guidelines-for-preventing-stroke/7867936.html",
            "urlToImage": "https://gdb.voanews.com/adfb512d-035a-4eae-9bb2-3ad6e53e2eed_cx0_cy1_cw0_w1200_r1.jpg",
            "publishedAt": "2024-11-25T22:05:00Z",
            "content": "From VOA Learning English, this is the Health &amp; Lifestyle report.\r\nNew guidelines have been issued in the United States for preventing stroke the nations 4th biggest killer.\r\nThe U.S. Centers for… [+5913 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles || [],
            loading: false,
            page: 1,
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?q=india+politics&from=2024-10-27&sortBy=publishedAt&apiKey=7a7d92e077be45eaa5badcb4941dcba7&page${this.state.page - 1}&pageSize=50`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles || [], totalArticles: parsedData.totalResults })
    }

    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/everything?q=india+politics&from=2024-10-27&sortBy=publishedAt&apiKey=7a7d92e077be45eaa5badcb4941dcba7&page=${this.state.page - 1}&pageSize=50`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles || []
        })
    }

    handleNextClick = async () => {
        console.log("Next");
        debugger
        if (this.state.page + 1 > Math.ceil(this.state.totalArticles / 500)) {

        }
        else {
            let url = `https://newsapi.org/v2/everything?q=india+politics&from=2024-10-27&sortBy=publishedAt&apiKey=7a7d92e077be45eaa5badcb4941dcba7&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles || []
            })
        }
    }



    render() {
        return (
            <>
                <div className='container mt-5'>
                    <div className="row gy-4 gx-5 mb-3">
                        <h2 className='customLogo'>Funkey News Headlines</h2>
                        {this.state.articles.map((element) => {
                            if (element.source.id !== null) {
                                return (
                                    <div className=" col-12 col-md-6 col-lg-3" key={element.url}>
                                        <NewItems title={element.title ? element.title.slice(0, 40) : " "} description={element.description ? element.description.slice(0, 80) : " "} imageURL={element.urlToImage} newsURL={element.url} />
                                    </div>
                                )
                            }
                            return null;
                        })}
                    </div>
                    <div className="container d-flex justify-content-between mb-5">
                        <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                        <button className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}

export default News