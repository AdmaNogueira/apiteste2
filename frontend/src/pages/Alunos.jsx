import axios from 'axios'
import { Table, Container, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import CreateModal from '../components/CreateAddModal'
import UpdateModal from '../components/UpdateModal'
import {Api} from '../api/Api'
import './Alunos.css'

function Alunos() {
  const [Posts, setPosts] = useState()
  const [CreateModalOpen, setCreateModalOpen] = useState(false)
  const [UpdateModalOpen, setUpdateModalOpen] = useState(false)
  const [selectedPosts, setSelectedPosts] = useState()

  const handleCloseCreateModal = () => setCreateModalOpen(false);
  const handleShowCreateModal = () => setCreateModalOpen(true);

  const handleCloseUpdateModal = () => setUpdateModalOpen(false);
  const handleShowUpdateModal = () => setUpdateModalOpen(true);

  const getPosts = async () => {
    try {
      const response = await Api.get('/aluno');
      const data = response.data;
      console.log(data)

      setPosts(data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {

    getPosts()

  }, []);

  async function deletePosts(Id) {
 
    try {
      axios
      Api.delete('/aluno/' +Id)

      const formattedPosts = Posts.filter(Postss => {
        if(Postss.id !== Id){
          return Postss
        }
      })

      setPosts(formattedPosts)
    } catch(err) {
      throw err
    }
  }

  async function createPosts(event) {
    try {
      event.preventDefault()

      const req = event.currentTarget.elements
      const nome = req.nome.value
      const turma = req.turma.value
      const turno = req.turno.value
      const curso = req.curso.value

      axios
    Api.post('/aluno', { nome: nome, turma:turma, turno:turno, curso:curso})
       .then(res => {
        setPosts([...Posts, {
          nome: req.nome.value,
          turma: req.turma.value,
          turno: req.turno.value,
          curso: req.curso.value
                }])
        setCreateModalOpen(false)
      })
    } catch(err) {
      throw err
    }
  }

  async function updatePosts(event) {
    try {
      event.preventDefault()

      const req = event.currentTarget.elements
      const nome = req.nome.value
      const turma = req.turma.value
      const turno = req.turno.value
      const curso = req.curso.value
      const id = selectedPosts.id;
      axios
       Api('/aluno/'+ id, {id:id, nome: nome, turma:turma, turno:turno, curso:curso})
      
      const formattedPosts = Posts.map(Postss => {
        if(Postss.id === selectedPosts.id) {
          return {
            id: selectedPosts.id,
            nome: req.nome.value,
            turma: req.turma.value,
            turno: req.turno.value,
            curso: req.curso.value
          }
        }

        return Postss
      })

      setPosts(formattedPosts)

      setUpdateModalOpen(false)
    } catch(err) {
      throw err
    }
  }

  return(
    <> 
    <Container
      className="
        d-flex
        flex-column
        align-items-start
        justify-content-center
        h-100
        w-100
        "
    >
      <Button
        className="mb-8"
        onClick={handleShowCreateModal}
        variant='primary'>
        Adicionar
      </Button>
     
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Turma</th>
            <th>Turno</th>
            <th>Curso</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {Posts && Posts.map(Posts=> (
            <tr key={Posts.id}>
              <td>{Posts.nome}</td>
              <td>{Posts.turma}</td>
              <td>{Posts.turno}</td>
              <td>{Posts.curso}</td>
              <td>
                <Button onClick={() => deletePosts(Posts.id)} variant='danger'>
                  Excluir
                </Button>
                <Button
                  onClick={() => {
                    handleShowUpdateModal()
                    setSelectedPosts(Posts)
                  }}
                  variant='warning'
                  className='m-1'
                  >
                  Atualizar
                </Button>
              </td>

            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    <CreateModal ModalOpen={CreateModalOpen} handleClose={handleCloseCreateModal} createPosts={createPosts} />
    {selectedPosts && (
      <UpdateModal ModalOpen={UpdateModalOpen} handleClose={handleCloseUpdateModal} updatePosts={updatePosts} Posts={selectedPosts} />
    )}
    </>
  )
}

export default Alunos
