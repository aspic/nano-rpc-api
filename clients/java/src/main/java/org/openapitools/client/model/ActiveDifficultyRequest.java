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
 * ActiveDifficultyRequest
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2019-08-17T13:08:44.524+02:00[Europe/Oslo]")
public class ActiveDifficultyRequest {
  /**
   * Gets or Sets action
   */
  @JsonAdapter(ActionEnum.Adapter.class)
  public enum ActionEnum {
    ACTIVE_DIFFICULTY("active_difficulty");

    private String value;

    ActionEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static ActionEnum fromValue(String value) {
      for (ActionEnum b : ActionEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<ActionEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ActionEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public ActionEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return ActionEnum.fromValue(value);
      }
    }
  }

  public static final String SERIALIZED_NAME_ACTION = "action";
  @SerializedName(SERIALIZED_NAME_ACTION)
  private ActionEnum action;

  public static final String SERIALIZED_NAME_INCLUDE_TREND = "include_trend";
  @SerializedName(SERIALIZED_NAME_INCLUDE_TREND)
  private Boolean includeTrend;

  public ActiveDifficultyRequest action(ActionEnum action) {
    this.action = action;
    return this;
  }

   /**
   * Get action
   * @return action
  **/
  @ApiModelProperty(required = true, value = "")
  public ActionEnum getAction() {
    return action;
  }

  public void setAction(ActionEnum action) {
    this.action = action;
  }

  public ActiveDifficultyRequest includeTrend(Boolean includeTrend) {
    this.includeTrend = includeTrend;
    return this;
  }

   /**
   * Boolean, false by default. Also returns the trend of difficulty seen on the network as a list of multipliers. Sampling occurs every 16 to 36 seconds. The list is ordered such that the first value is the most recent sample. 
   * @return includeTrend
  **/
  @ApiModelProperty(value = "Boolean, false by default. Also returns the trend of difficulty seen on the network as a list of multipliers. Sampling occurs every 16 to 36 seconds. The list is ordered such that the first value is the most recent sample. ")
  public Boolean getIncludeTrend() {
    return includeTrend;
  }

  public void setIncludeTrend(Boolean includeTrend) {
    this.includeTrend = includeTrend;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ActiveDifficultyRequest activeDifficultyRequest = (ActiveDifficultyRequest) o;
    return Objects.equals(this.action, activeDifficultyRequest.action) &&
        Objects.equals(this.includeTrend, activeDifficultyRequest.includeTrend);
  }

  @Override
  public int hashCode() {
    return Objects.hash(action, includeTrend);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ActiveDifficultyRequest {\n");
    sb.append("    action: ").append(toIndentedString(action)).append("\n");
    sb.append("    includeTrend: ").append(toIndentedString(includeTrend)).append("\n");
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

