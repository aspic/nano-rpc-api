/*
 * nano-rpc-api
 * API specification for the [Nano Node RPC API](https://docs.nano.org/commands/rpc-protocol) 
 *
 * The version of the OpenAPI document: 19.0.0-alpha
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * BlockCreateResponse
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2019-08-14T13:51:02.588+02:00[Europe/Oslo]")
public class BlockCreateResponse {
  public static final String SERIALIZED_NAME_HASH = "hash";
  @SerializedName(SERIALIZED_NAME_HASH)
  private String hash;

  public static final String SERIALIZED_NAME_BLOCK = "block";
  @SerializedName(SERIALIZED_NAME_BLOCK)
  private String block;

  public BlockCreateResponse hash(String hash) {
    this.hash = hash;
    return this;
  }

   /**
   * Get hash
   * @return hash
  **/
  @ApiModelProperty(example = "8D3AB98B301224253750D448B4BD997132400CEDD0A8432F775724F2D9821C72", value = "")
  public String getHash() {
    return hash;
  }

  public void setHash(String hash) {
    this.hash = hash;
  }

  public BlockCreateResponse block(String block) {
    this.block = block;
    return this;
  }

   /**
   * Get block
   * @return block
  **/
  @ApiModelProperty(example = "{\"type\"...}", value = "")
  public String getBlock() {
    return block;
  }

  public void setBlock(String block) {
    this.block = block;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BlockCreateResponse blockCreateResponse = (BlockCreateResponse) o;
    return Objects.equals(this.hash, blockCreateResponse.hash) &&
        Objects.equals(this.block, blockCreateResponse.block);
  }

  @Override
  public int hashCode() {
    return Objects.hash(hash, block);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BlockCreateResponse {\n");
    sb.append("    hash: ").append(toIndentedString(hash)).append("\n");
    sb.append("    block: ").append(toIndentedString(block)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

