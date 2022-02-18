<template>
    <div>
        <h3>A02 Axios Modal</h3>

        <div>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Tel</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><a href="#" v-b-modal.modalGetContact></a></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colSpan="4">
                                <b-button  variant="outline-danger" size="sm" @click="$bvModal.show('modalAddContact')">ADD</b-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


        <!-- Add Contact -->
        <b-modal id="modalAddContact" title="Add Contactt">
            <div>
                Name: <input type="text" class="form-control" />
                Tel: <input type="text" class="form-control"  />
                Address: <input type="text" class="form-control" />
            </div>
            <template #modal-footer>
                <div class="w-100">
                    <b-button variant="primary" size="sm" class="float-right" @click="$bvModal.hide('modalAddContact')">ADD</b-button>
                </div>
            </template>
        </b-modal>


        <b-button  variant="outline-danger" size="sm" @click="$bvModal.show('modalGetContact')">ADD</b-button>
        <!-- Get Contact -->
        <b-modal id="modalGetContact" title="Get Contactt">
            <div>
                Name: <input type="text" class="form-control" disabled />
                Tel: <input type="text" class="form-control" disabled  />
                Address: <input type="text" class="form-control" disabled />
            </div>
            <template #modal-footer>
                <div class="w-100">
                    <b-button variant="primary" size="sm" class="float-left" @click="$bvModal.hide('modalGetContact'); $bvModal.show('modalUpdateContact');">UPDATE</b-button>
                    <b-button variant="danger" size="sm" class="float-left" @click="$bvModal.hide('modalGetContact')">DELETE</b-button>
                    <b-button size="sm" class="float-right" @click="$bvModal.hide('modalGetContact')">CLOSE</b-button>
                </div>
            </template>
        </b-modal>


        <!-- Update Contact -->
        <b-modal id="modalUpdateContact" title="Update Contactt">
            <div>
                Name: <input type="text" class="form-control" />
                Tel: <input type="text" class="form-control"  />
                Address: <input type="text" class="form-control" />
            </div>
            <template #modal-footer>
                <div class="w-100">
                    <b-button variant="primary" size="sm" class="float-right" @click="$bvModal.hide('modalUpdateContact')">UPDATE</b-button>
                </div>
            </template>
        </b-modal>


    </div>
</template>

<script>
export default {
    
}
</script>