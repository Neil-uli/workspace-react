import React, { useEffect } from "react"
import Banner from "../Organisms/Banner"
import { connect } from "react-redux"
import store from '../../redux/store';
import { getAllPosts } from '../../redux/actionCreators'
import Publication from "../Organisms/Publication";

const Home = ({ posts }) => {


  useEffect(() => {
    store.dispatch(getAllPosts())
  }, [])
  return (
    <>
      <Banner
        color="dark-color"
        image={{
          src: "http://seclist.us/wp-content/uploads/2015/10/myshellcode-debugging-470x260.jpg",
          alt: "Banner Especialidades"
        }}
        title="Bienvenido a la experiencia más increible en educación online"
        subtitle="Sé parte de esta comunidad y construyamos un mejor futuro"
        home
        poster="https://content.nanobox.io/content/images/2017/06/docker-banner.png"
      />
      <main className="ed-grid m-grid-3">
        <div className="l-section m-cols-2">
          <h2>Ultimas publicaciones</h2>
          {
            posts ?
              <div>
                {
                  posts.map(p =>
                    <Publication
                      title={p.title}
                      author={p.author}
                      fecha={p.fecha}
                      content={p.content}
                      key={p.id}
                    />)
                }
              </div> :
              <p>No existen publicaciones</p>

          }
        </div>
        <div>
          <h3> Lista de categorias </h3>
          <ul className="feature-list">
            <li><span>React.js</span></li>
            <li><span>React native</span></li>
            <li><span>Angular</span></li>
            <li><span>Vue.js</span></li>
            <li><span>PHP</span></li>

          </ul>
        </div>
      </main>
    </>
  )
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts
})

export default connect(mapStateToProps, {})(Home)
