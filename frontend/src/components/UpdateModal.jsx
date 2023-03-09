import { Modal, Button, Form } from 'react-bootstrap'
function UpdateModal(props) {
  return(
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={props.ModalOpen}>
        <Form onSubmit={(event) => {
          props.updatePosts(event)
        }}>
        <Modal.Header closeButton onClick={props.handleClose}>
          <Modal.Title>Atualizar</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="nome">
            <Form.Label>
              Nome
            </Form.Label>
            <Form.Control defaultValue={props.Posts.nome} type="text" />
          </Form.Group>

          <Form.Group controlId="turma">
            <Form.Label>
              Turma
            </Form.Label>
            <Form.Control defaultValue={props.Posts.turma} type="text" />
          </Form.Group>

          <Form.Group controlId="turno">
            <Form.Label>
              Turno
            </Form.Label>
            <Form.Control defaultValue={props.Posts.turno} type="text" />
          </Form.Group>

          <Form.Group controlId="curso">
            <Form.Label>
              Curso
            </Form.Label>
            <Form.Control defaultValue={props.Posts.curso} type="text" />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>Close</Button>
          <Button variant="primary" type="submit">Salvar</Button>
        </Modal.Footer>
        </Form>
      </Modal >
    </div>
  )
}

export default UpdateModal