import "./App.css";
import FabricCanvas from "./components/comment";
// interface Item {
//   username: string;
//   comment: string;
//   replies?: Item[];
// }
// interface Props {
//   item: Item;
// }

const CommentBox = ({ item }) => {
  console.log(item);
  return (
    <div>
      {item.map((item, index) => (
        <div key={index}>
          <div>{item.username}</div>
          <p>{item.comment}</p>
          <div style={{ paddingLeft: "10px" }}>
            {item?.replies && <CommentBox item={item.replies} />}
          </div>
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div>
      {/* <div>sfsf</div> */}
      {/* {data.map((item, index) => ( */}
      {/* <CommentBox item={data} /> */}
      <FabricCanvas />
      {/* ))} */}
    </div>
  );
}

export default App;

const data = [
  {
    username: "Akshay Saini",
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    replies: [
      {
        username: "Deepika Padukone",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      },
    ],
  },
  {
    username: "Elon Musk",
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    replies: [
      {
        username: "Deepika Padukone",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
        replies: [
          {
            username: "Deepika Padukone",
            comment:
              "Lorem ipsum dolor sit amet consectetur adip occurence velit",
            replies: [
              {
                username: "Deepika Padukone",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                replies: [
                  {
                    username: "Deepika Padukone",
                    comment:
                      "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                    replies: [
                      {
                        username: "Deepika Padukone",
                        comment:
                          "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                        replies: [
                          {
                            username: "Deepika Padukone",
                            comment:
                              "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            username: "Deepika Padukone",
            comment:
              "Lorem ipsum dolor sit amet consectetur adip occurence velit",
          },
        ],
      },
      {
        username: "Deepika Padukone",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      },
    ],
  },
  {
    username: "Sachin Tendulkar",
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
  },
];
